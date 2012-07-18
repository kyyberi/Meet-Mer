### Creates seed for Mer core package listing ###
require 'nokogiri'
require 'open-uri'

path = "http://releases.merproject.org/~carsten/mer-core-i586-connectivity-xorg-basic-qmlviewer.packages-proposed-deps.txt"

# Get a Nokogiri::HTML:Document for the page we’re interested in...
puts "  "


####
# Search for nodes by xpath
#  

def getDepList(path)
   
   web_contents  = open(path) { |f| 
 	f.read 
   }
   readLines(web_contents)

end

def readLines(ifile) 
 	ifile.each_line do |line|
	mys = "#{line}" 		
		@arr = line.split(":")
		puts @arr[0]
		puts @arr[1]
		puts @arr[2]
	end
end
getDepList(path)
