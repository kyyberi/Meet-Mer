require 'nokogiri'
require 'open-uri'

path = "http://mer.bfst.de/meetings/mer-meeting/2012/"

# Get a Nokogiri::HTML:Document for the page we’re interested in...
doc = Nokogiri::HTML(open(path))
puts "Meeting.create(["
puts "  "

####
# Search for nodes by xpath
def getLinkList(doc, path)
	doc.xpath('//a').each do |link|
 		if link['href'] =~ /html$/
			# puts link['href'] 

			path2 = path 
                	path2 += link['href']
			# puts path2
			doc2 = Nokogiri::HTML(open(path2))
			collect(doc2, link, path)
                end
	end
puts "]) "
end




## Collect data from one meeting and print it out
def collect(doc, link, path)
doc.xpath('//title').each do |titleraw|
	array = titleraw.text.split(":")
	s = array[1]
	unless link['href'] =~ /log.html$/
		puts "{ "
		## CHANNEL
		print "    :channel =>"
		print "\""
		print array.first 
		puts "\"," 

		## TITLE
		print "    :title =>"
		print "\""
		print array[1] 
		puts "\"," 

		## URL to MINUTES
		print "    :murl =>" 
		print "\"" 
		print path						
		print link['href']
		puts "\"," 
		getDate(link['href'])
		
		getStartEndTime(path, link['href'])
		puts ""
		puts "}, "
		
		end
	end
end

def getDate(s_in)
## mer-meeting.2012-01-10-12.02.html
	array = s_in.split(".")
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
	print "    :meetingdate => DateTime.new("
	print myear
	print "," 
	print mmonth
	print "," 
	print mday
	print "," 
	print mhours
	puts "),"
# :meetingDate  => DateTime.new(2009,9,1,17),
	## output the month and year to separate columns as well. 
	print "    :meetingyear =>"
	print "\""
	print myear
	puts "\","
	print "    :meetingmonth =>"
	print "\""
	print mmonth
	puts "\","
end

def getStartEndTime(path, surl)
s = surl[0..-5]
s += "log.html"

path += s

print "    :logsurl => \""
		print path
		puts "\", "

doc = Nokogiri::HTML(open(path))
	doc.xpath('//span[@class = "tm"][1]').each do |link|
		print "    :startTime => \""
		print link.text
		puts "\", "
	end
	doc.xpath('//span[@class = "tm"][last()]').each do |link|
		print "    :endTime => \""
		print link.text
		puts "\""
		
	end
	
end


puts getLinkList(doc, path)
