####################################################
# bugs.rb
####################################################
# - Updates bugss table in database by retrieving
# input data from web, Mer project Bugzilla.  
#
# - Script will erase all bugs from table, since retrieved 
# bugs are all 'not taken' status bugs. It's easier to 
# clear all and input all bugs info again than iterate
# all existing first and then add missing bugs 
#
# Author: Jarkko (kyyberi) Moilanen
# Email: jarkko@want3d.fi


require 'nokogiri'
require 'open-uri'
require 'mysql'
require 'date'
require 'htmlentities'

###### Needed URLs
not_taken_bugs_atom = "https://bugs.merproject.org/buglist.cgi?bug_severity=critical&bug_severity=major&bug_severity=normal&bug_severity=trivial&bug_severity=enhancement&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&email1=not-taken%40&emailassigned_to1=1&emailtype1=substring&query_format=advanced&title=Bug%20List&ctype=atom"
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
def getBugsNotTaken(atomurl)
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
	#    <title>[Bug 296] [META] Define the package naming policy</title>
	#    <link rel="alternate" type="text/html"
	#          href="https://bugs.merproject.org/show_bug.cgi?id=296"/>
	#    <id>https://bugs.merproject.org/show_bug.cgi?id=296</id>
	#    <author>
	#      <name>Marko Saukko</name>
	#    </author>
	#    <updated>2012-04-16T12:54:58Z</updated>
	#<summary type="html">
      	#	&lt;table&gt;
      	# 	&lt;tr&gt;
        #		&lt;th&gt;Field&lt;/th&gt;&lt;th&gt;Value&lt;/th&gt;
        # 	&lt;/tr&gt;&lt;tr class=&quot;bz_feed_product&quot;&gt;
        #	&lt;td&gt;Product&lt;/td&gt;
        #	&lt;td&gt;Mer Core&lt;/td&gt;
      	#	&lt;/tr&gt;&lt;tr class=&quot;bz_feed_component&quot;&gt;
	#	.....
        #	&lt;td&gt;Priority&lt;/td&gt;
        #	&lt;td&gt;High&lt;/td&gt;
        #	&lt;td&gt;Severity &lt;/td&gt;
        #	&lt;td&gt;major&lt;/td&gt;
      	#	&lt;/tr&gt;&lt;tr class=&quot;bz_feed_creation_date&quot;&gt;
        #	&lt;td&gt;Creation date&lt;/td&gt;
        #	&lt;td&gt;2012-01-25&lt;/td&gt;
    	#	...	
	#</summary>
		btitle = strCleanUp(String(node.xpath('xmlns:title').inner_text))
		@arr_node.push(btitle)
	
	        blink = node.xpath('xmlns:link').attr('href')
	        @arr_node.push(blink)
	
	        bauthor = strCleanUp(String(node.xpath('xmlns:author/xmlns:name').inner_text))
	        @arr_node.push(bauthor)

	        bupdated = node.xpath('xmlns:updated').inner_text
	        @arr_node.push(bupdated)

		createdhtml = node.xpath('xmlns:summary').inner_text
		# parse html with nokogiri and get created at value
		html = Nokogiri::HTML(HTMLEntities.new.decode(createdhtml))
		created = html.xpath('//td[. = "Creation date"]/following-sibling::td').inner_text
		severity = html.xpath('//td[. = "Severity "]/following-sibling::td').inner_text	
		priority = html.xpath('//td[. = "Priority"]/following-sibling::td').inner_text		
		@arr_node.push(severity)	
		@arr_node.push(priority)	
		@arr_node.push(created)	

		@arr_node.push('new')		

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
        puts " 'ruby meetings.rb [database name] [database username] [database passwd]' "
        puts ""
        puts "Try again :)"
end


def getNew(db_results, arr_not_taken)
	@newlist = arr_not_taken
	@dbArr = Array.new
	# convert hash to array

	db_results.each_hash { |h| 
                @dbArrItem = Array.new
		@dbArrItem.push(h['btitle'])
		@dbArrItem.push(h['blink'])
		@dbArrItem.push(h['bauthor'])
		@dbArrItem.push(h['bupdated'])
		@dbArrItem.push(h['bstatus'])
		
		@dbArr.push(@dbArrItem)		
	} 

	# get diff of arrays == links not found
@notFound = @newlist - @dbArr
print "Found new not taken bugs - "
print @notFound.length
puts " pcs"

return @notFound



end
###################################################
### BEGIN UPDATE 
###################################################

# First connect to database and select existing meetings from there
con = Mysql.new('localhost', username, passwd, database)
### If passwordless access allowed use:
#con = Mysql.new('localhost', '', '', database)  
db_results = con.query('select btitle,blink,bauthor,updated_at,bstatus from bugs')
con.close # could be left open put prefer to close if not needed. 

# get list of new links
@arrNotTaken = getBugsNotTaken(not_taken_bugs_atom)

# Compare existing and new and get difference. FIXME: Not working
@newNotTaken = getNew(db_results, @arr_not_taken)

# clear all from database
con = Mysql.new('localhost', username, passwd, database)
### If passwordless access allowed use:
#con = Mysql.new('localhost', '', '', database)  
db = con.query('TRUNCATE TABLE bugs')

# Constant input start
columns = "INSERT INTO bugs (btitle, blink,"
columns += "bauthor, bseverity, updated_at, bpriority, created_at, bstatus) " 
# construct values
@arrNotTaken.each do |bug|
values = "VALUES ('"
values += bug[0] # title
values += "','"
values += bug[1] # url
values += "','"
values += bug[2] # name
values += "','"
values += bug[4] # severity
values += "','"
values += bug[3] # updated
values += "','"
values += bug[5] # priority
values += "','"
values += bug[6] # created
values += "','"
values += bug[7] # status
values += "')"
# ' Bug 416  Mer contribution should not require an OBS  in order to build','https://bugs.merproject.org/show_bug.cgi?id=416','Carsten Munk','normal','2012-07-09T11:23:42Z','Low','2012-07-07','new')

insert = columns
insert += values

#puts insert
# execute insert
rs = con.query(insert)
end


con.close # could be left open put prefer to close if not needed. 

