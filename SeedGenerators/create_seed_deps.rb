### Creates seed for Mer core package listing ###
require 'nokogiri'
require 'open-uri'

path = "http://gitweb.merproject.org/gitweb?p=mer/project-core.git;a=blob_plain;f=packages.xml;hb=HEAD"

# Get a Nokogiri::HTML:Document for the page we’re interested in...
doc = Nokogiri::XML(open(path))
puts "Package.create(["
puts "  "


####
# Search for nodes by xpath
#  
# we need for each: 
# { 
#    :commit => "xxx",
#    :name => "xxx",
#    :origin =>"URL == path above",
#    :git => "xxx",
#    :vrev => "xxx",
# }, 
#
#

def getPackageList(doc, path)
        doc.xpath('//package').each do |package|
			puts  " {"
                        print "   :package_name => \"" 
			print package['name']
			puts "\", "
			print  "   :package_version => \""
			print package['vrev']
			puts "\", "
			print  "   :package_git => \""
			print package['git']
			puts "\", "
			print  "   :package_commit => \""
			print package['commit']
			puts "\", "
			puts "  }," 
        end
	
puts "]) "
end



getPackageList(doc, path)
