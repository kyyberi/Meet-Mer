####################################################
# tasks.rb
####################################################
# - Updates not taken tasks table in database by retrieving
# input data from web, Mer project Bugzilla.  
#
# - Script will erase all tasks from table, since retrieved 
# tasks are all 'not taken' status bugs. It's easier to 
# clear all and input all tasks info again than iterate
# all existing first and then add missing tasks. 
# Although script does collect tasks from DB in case 
# we decide to have different approach. 
# 
# Author: Jarkko (kyyberi) Moilanen
# Email: jarkko@want3d.fi


require 'nokogiri'
require 'open-uri'
require 'mysql'
require 'date'
require 'htmlentities'

require 'openssl'
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

###### Needed URLs
task_list_atom = "https://bugs.merproject.org/buglist.cgi?bug_severity=task&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&email1=not-taken%40&emailassigned_to1=1&emailtype1=substring&query_format=advanced&title=Bug%20List&ctype=atom"


###### take needed inputs from user
database = ARGV[0]
username = ARGV[1]
passwd = ARGV[2]

if database == nil
        puts usage()
        abort
end
if username == nil
        puts usage()
        abort
end
if passwd == nil
        puts usage()
        abort
end


###### collect new list of 'not taken' to arrays within main array
# init empty main array
def getTasksNotTaken(atomurl)
	@arr_not_taken = Array.new 

	doc = Nokogiri::XML(open(atomurl))
	if doc
		puts "doc loaded"
	end
	doc.xpath('//xmlns:entry').each do |node|        
	# init new node array
	@arr_node = Array.new
	# Each node (should) contain:
	# <entry>
    	#	<title>[Bug 103] rootfs builds in integration testing/gerrit changes</title>
    	#	<link rel="alternate" type="text/html" href="https://bugs.merproject.org/show_bug.cgi?id=103"/>
    	#	<id>https://bugs.merproject.org/show_bug.cgi?id=103</id>
    	#	<author>
      	#		<name>David Greaves</name>
    	#	</author>
    	#	<updated>2012-03-19T12:52:37Z</updated>
    	#	<summary type="html">      
	#	    &lt;table&gt;
      	#		&lt;tr&gt;
        #		&lt;th&gt;Field&lt;/th&gt;&lt;th&gt;Value&lt;/th&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_product&quot;&gt;
        #		  &lt;td&gt;Product&lt;/td&gt;
        #		  &lt;td&gt;Mer Policies and Processes&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_component&quot;&gt;
        #		  &lt;td&gt;Component&lt;/td&gt;
        #		  &lt;td&gt;gerrit-patchset-created&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_assignee&quot;&gt;
        #		  &lt;td&gt;Assignee&lt;/td&gt;
        #		  &lt;td&gt;Not Taken&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_reporter&quot;&gt;
        #		  &lt;td&gt;Reporter&lt;/td&gt;
        #		  &lt;td&gt;David Greaves&lt;/td&gt;
     	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_bug_status&quot;&gt;
        #		  &lt;td&gt;Status&lt;/td&gt;
        #		  &lt;td&gt;NEW&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_resolution&quot;&gt;
        #		  &lt;td&gt;Resolution &lt;/td&gt;
        #		  &lt;td&gt;---&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_priority&quot;&gt;
        #		  &lt;td&gt;Priority&lt;/td&gt;
        #		  &lt;td&gt;High&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_severity&quot;&gt;
        #		  &lt;td&gt;Severity &lt;/td&gt;
        #		  &lt;td&gt;task&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_creation_date&quot;&gt;
        #		  &lt;td&gt;Creation date&lt;/td&gt;
        #		  &lt;td&gt;2012-01-10&lt;/td&gt;
      	#		&lt;/tr&gt;&lt;tr class=&quot;bz_feed_changed_date&quot;&gt;
        #		  &lt;td&gt;Last changed date&lt;/td&gt;
        #		  &lt;td&gt;2012-03-19&lt;/td&gt;
      	#		&lt;/tr&gt;
      	#	     &lt;/table&gt;
    	#	</summary>
  	# </entry>
		
		# title special chars escaped at insert
		ttitle = node.xpath('xmlns:title').inner_text
		# ttitle = strCleanUp(String(node.xpath('xmlns:title').inner_text))
	        tlink = node.xpath('xmlns:link').attr('href')
		tauthor = strCleanUp(String(node.xpath('xmlns:author/xmlns:name').inner_text))
		tupdated = node.xpath('xmlns:updated').inner_text
		createdhtml = node.xpath('xmlns:summary').inner_text
		# parse html with nokogiri and get values
		html = Nokogiri::HTML(HTMLEntities.new.decode(createdhtml))
		created = html.xpath('//td[. = "Creation date"]/following-sibling::td').inner_text
		severity = html.xpath('//td[. = "Severity "]/following-sibling::td').inner_text	
		priority = html.xpath('//td[. = "Priority"]/following-sibling::td').inner_text	
		product = strCleanUp(String(html.xpath('//td[. = "Product"]/following-sibling::td').inner_text))

		# Need to get
		# ttitle, tlink, tauthor, tproduct, tseverity, tpriority, tstatus, updated_at, created_at	
		@arr_node.push(ttitle)
		@arr_node.push(tlink)
		@arr_node.push(tauthor)		
		@arr_node.push(product)	
		@arr_node.push(severity)	
		@arr_node.push(priority)
		@arr_node.push('new')		
		@arr_node.push(tupdated)
		@arr_node.push(created)	
		# Push to main array
		@arr_not_taken.push(@arr_node)
		
		
	end
	return @arr_not_taken
end


def strCleanUp(str)
	clean = str.gsub(/[^a-zA-Z0-9\-]/," ")
	return clean
end

def usage()
        puts "################# USAGE ############"
        puts "to run script, use (localhost only):"
        puts " 'ruby tasks.rb [database name] [database username] [database passwd]' "
        puts ""
        puts "Try again :)"
end


def getNew(db_results, arr_not_taken)
	@newlist = arr_not_taken
	@dbArr = Array.new
	# convert hash to array

	db_results.each_hash { |h| 
                @dbArrItem = Array.new
		@dbArrItem.push(h['ttitle'])
		@dbArrItem.push(h['tlink'])
		@dbArrItem.push(h['tauthor'])
		@dbArrItem.push(h['tproduct'])
		@dbArrItem.push(h['tseverity'])
		@dbArrItem.push(h['tpriority'])
		@dbArrItem.push(h['tstatus'])
		@dbArrItem.push(h['updated_at'])
		@dbArrItem.push(h['created_at'])		
		
		@dbArr.push(@dbArrItem)		
	} 

	# get diff of arrays == links not found
	@notFound = @newlist - @dbArr
	print "Found new not taken tasks - " #FIXME: does not work like this
	print @notFound.length
	puts " pcs"

	return @notFound

end
###################################################
### BEGIN UPDATE 
###################################################

# table column names in string, just to make sure we get and put the same and in same order
# so that in future we can compare the arrays to get new ones as diff
columns = "ttitle, tlink, tauthor, tproduct, tseverity, tpriority, tstatus, updated_at, created_at"

# First connect to database and select existing meetings from there
con = Mysql.new('localhost', username, passwd, database)
### If passwordless access allowed use:
#con = Mysql.new('localhost', '', '', database)  
querystr = "select " 
querystr += columns
querystr+= " from tasks" 

db_results = con.query(querystr)
con.close # could be left open put prefer to close if not needed. 

# get list of new links
@arrNotTaken = getTasksNotTaken(task_list_atom)

# Compare existing and new and get difference. FIXME: Not working
@newNotTaken = getNew(db_results, @arr_not_taken)

# clear all from database
begin
	con = Mysql.new('localhost', username, passwd, database)
	### If passwordless access allowed use:
	#con = Mysql.new('localhost', '', '', database)  
	db = con.query('TRUNCATE TABLE tasks')
	# TRUNCATE TABLE tablename; This will delete all data in the table very quickly. 
	# In MySQL the table is actually dropped and recreated, hence the speed of the query. 
	# The number of deleted rows for MyISAM tables returned is zero; 
	# for INNODB it returns the actual number deleted.
	# 
	# Alternative is to use DELETE
	# DELETE FROM tablename; This also deletes all the data in the table, but is not as 
	# quick as using the "TRUNCATE TABLE" method. In MySQL >= 4.0 the number of rows 
	# deleted is returned; in MySQL 3.23 the number returned is always zero.

	# Constant input start
	newquery = "INSERT INTO tasks (" + columns + ") " 
	# construct values
	# ttitle, tlink, tauthor, tproduct, tseverity, tpriority, tstatus, updated_at, created_at
	@arrNotTaken.each do |task|
		values = "VALUES ('"
		# need to sanitize, could use also http://api.rubyonrails.org/classes/ActiveRecord/Sanitization/ClassMethods.html
		# but that requires yet another include... 
		values += con.escape_string(task[0]) # ttitle
		values += "','"
		values += task[1] # tlink
		values += "','"
		values += con.escape_string(task[2]) # tauthor
		values += "','"
		values += con.escape_string(task[3]) # tproduct
		values += "','"
		values += task[4] # tseverity
		values += "','"
		values += task[5] # tpriority
		values += "','"
		values += task[6] # tstatus
		values += "','"
		values += task[7] # updated_at
		values += "','"
		values += task[8] # created_at
		values += "')"
		# Will output something like:

		insert = newquery
		insert += values

		#puts insert
		# execute insert
		 rs = con.query(insert)
	end

	con.close 

rescue => e
	puts "oh my, an exception: #{e}: #{e.backtrace.join("\n")}"
ensure
        
end


# DONE

