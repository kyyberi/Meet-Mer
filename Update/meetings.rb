####################################################
# meetings.rb
####################################################
# - Updates Meetings table in database by retrieving
# input data from web (list of IRC meetings).  
#
# - Updates only current year meetings, 
# could be limited to few months back 
#
# - Also dababase query is limited to get current
# year fields. Possible bug: could leave out past
# meetings if update not run near turn of the year
#
# Author: Jarkko (kyyberi) Moilanen
# Email: jarkko@want3d.fi

require 'nokogiri'
require 'open-uri'
require 'mysql'
require 'date'

ctime = Time.new
cyear = String(ctime.year)

path = "http://mer.bfst.de/meetings/mer-meeting/"
path += cyear
path += "/"

@links = Array.new


# Get a Nokogiri::HTML:Document for the page we’re interested in...
if doc = Nokogiri::HTML(open(path))
	print "Meetings directory retrieved from: "
	print path
	puts ""
end
puts "Updating Meetings..."
def usage()
	puts "################# USAGE ############"
	puts "to run script, use (localhost only):"
	puts " 'ruby meetings.rb [database name] [database username] [database passwd]' "
	puts ""
	puts "Try again :)"
end

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




def getDates(s_in)
## http://mer.bfst.de/meetings/mer-meeting/2012/mer-meeting.2012-07-16-11.01.html
	pos = s_in.rindex('/')
	s = s_in[pos, s_in.length]
	array = s.split(".")
	time_s = array[1]
	array2 = time_s.split('-')
	myear = array2[0]
	mmonth = array2[1]
	if mmonth[0] == "0"
		mmonth = mmonth[1]
	end
	mday = array2[2]
	if mday[0] == "0"
		mday = mday[1]
	end
	mhours = array2[3]
	if mhours[0] == "0"
		mhours = mhours[1]
	end
	res = ""
	res += myear
        res += "','"
	res += mmonth
	res += "','"
	tmp  = ""
	tmp += myear
        tmp += "-"
	tmp += mmonth
        tmp += "-"
	tmp += mday
        tmp += "T"
	tmp += mhours
        tmp += ":00:00Z'"     
     
	
#	datetime = DateTime.new(tmp).to_s
	datetime = tmp 
	res += datetime
#        res += "'"
	

return res

end


def getStartEndTime(logurl)

doc = Nokogiri::HTML(open(logurl))
	res = ",'"
	doc.xpath('//span[@class = "tm"][1]').each do |link|
		res +=  link.text
		res += "',"
	end
	doc.xpath('//span[@class = "tm"][last()]').each do |link|
		res += "'"
		res += link.text
		res += "'"
		
	end
	return res
end




#### Search for nodes by xpath
def getLinkList(db_results, doc, path)
	doc.xpath('//a').each do |link|
 		if link['href'] =~ /html$/
			# puts link['href'] 

			path2 = path 
                	path2 += link['href']
			if path2.index('.log.html')
				@links.push(path2)
			end
                end
	end

	@dbArr = Array.new

	db_results.each_hash { |h| 
		exists_murl = h['logsurl']
		@dbArr.push(exists_murl)
	exists_starttime = h['starttime']
	#puts exists_murl
	#puts exists_starttime
	} 

# get diff of arrays == links not found
@notFound = @links - @dbArr
print "Found new meetings - "
print @notFound.length
puts " pcs"

return @notFound
end

#### Collect data and construct query
def collect(doc, link, loglink)
doc.xpath('//title').each do |titleraw|
	array = titleraw.text.split(":")
	s = array[1]
	res = "'"
	res += array.first
	res += "','" 
	res += array[1] 
	res += "','"
	return res

	#getStartEndTime(path, link['href'])
	
	end
end


#### iterate found links, get query from collect()
def createQueries(newLinks)
	columns = "INSERT INTO meetings (channel,title,meetingyear,"
	columns += "meetingmonth,meetingdate,startTime,endTime,murl,logsurl, updated_at, created_at)"
        @retArr = Array.new
	@newLinks.each do |loglink|
#		puts link
		link = loglink.sub( ".log.html", ".html" )
		#puts link
		curtime = Time.new
		doc2 = Nokogiri::HTML(open(link))
			queryp1 = collect(doc2, link, loglink)
			queryp2 = getDates(link)
			queryp3 = getStartEndTime(loglink)
			values = "VALUES ("
			values += queryp1
			values += queryp2
			values += queryp3
			values += ",'"
			values += link
			values += "','"
			values += loglink
			values += "',"
			values += "NOW()" # add current time to updated_at field
			values += ","
			values += "NOW()" # add current time to created_at field
			values += ""
			values += ")"	
			
			query = columns
			query += values

			@retArr.push(query)			
			
	end
return @retArr
end

def processQueries(arr)

end

###################################################
### BEGIN UPDATE 
###################################################

# First connect to database and select existing meetings from there
con = Mysql.new('localhost', username, passwd, database)  
### If passwordless access allowed use:
#con = Mysql.new('localhost', '', '', database)  
rs = con.query('select logsurl,starttime from meetings WHERE meetingyear = YEAR(CURDATE())')   
con.close # could be left open put prefer to close if not needed. 

# get list of new links
@newLinks = getLinkList(rs, doc, path)

# if there are new links, create SQL queries

if @newLinks.length > 0
	#@queries = Array.new
	@queries = createQueries(@newLinks)
	con = Mysql.new('localhost', username, passwd, database)  
	### If passwordless access allowed use:
	#con = Mysql.new('localhost', '', '', database)  
 	if @queries.length > 0
		@queries.each do |insert|
			cmd = "\""
			cmd += insert
			cmd += "\""
			# puts cmd
			rs = con.query(insert)  	
		end
	end
	con.close # could be left open put prefer to close if not needed. 
else
	puts "Meetings - Nothing to do, exiting"
	abort
end
# execute queries

















