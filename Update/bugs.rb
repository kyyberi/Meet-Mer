require 'nokogiri'
require 'open-uri'
require 'mysql'
require 'date'


bugsurl = "https://bugs.merproject.org/show_bug.cgi"

doc = Nokogiri::XML(open(bugsurl))
if doc
	puts "doc loaded"
end

doc.xpath('//bug').each do |node|        
	btitle = puts node.xpath('short_desc').inner_text
	puts btitle
end

