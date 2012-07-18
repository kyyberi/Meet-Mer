### Creates seed for Mer core package listing ###
require 'nokogiri'
require 'open-uri'

path = "http://releases.merproject.org/~carsten/mer-core-i586-connectivity-xorg-basic-qmlviewer.packages-proposed-deps.txt"
#path "./multimedia.txt"
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
	# arrays
        arrFroms = Array.new
	arrTos = Array.new
        arrDtypes = Array.new
	arrUnique = Array.new

 	ifile.each_line do |line|
        sfrom = ""
        sto = ""
        dtype = ""
	s = ""
	mys = "#{line}" 	
        s = mys[1,mys.length]	
		@arr = s.split(":")
                        if(@arr[0][0,1] == "@" || @arr[0][0,1] == "/")
				#puts @arr[0][1, @arr[0].length]
				sfrom = @arr[0][1, @arr[0].length]
			else
				sfrom = @arr[0]
			end
			if(@arr[1][0,1] == "/" || @arr[1][0,1] == "/")
				sto = @arr[1][1, @arr[1].length]
                        else
				sto = @arr[1]
                        end
			dtype = @arr[2]

			# strip / - take last string after '/'
			substring = "/"
			sfrom.include? substring
				start_ss = sfrom.rindex(substring) 
				sfrom = sfrom[start_ss+1, sfrom.length]
			
			#puts sfrom
			arrFroms.push(sfrom)
			
                       # strip / - take last string after '/'
			sto.include? substring
                        	start_ss = sto.rindex(substring)
				if (start_ss == nil)
                       		sto = sto[0, sto.length]
				else
				sto = sto[start_ss+1, sto.length]
				end
			#puts sto
			arrTos.push(sto)
			#puts sto
			#puts dtype
			arrDtypes.push(dtype)
			#puts "--"

			arrUnique = arrFroms.uniq
			
	end
	createGroups(arrUnique, arrFroms, arrTos, arrDtypes)
end



def createGroups (uniqArr, mainArr, tosArr, typesArr)
	count = 0
	puts "var json = [{"
	uniqArr.each do |item|
        # we need to get
	#	"id": "node0",
        #	"name": "node0 name",
        #	"data": {
        #    	"    $dim": 16.759175934208628,
        #    	"    some other key": "some other value"
        #	"},"
	puts ""
	if count != 0
	  print "{"
	end
        count += 1
	print " \"id\": \""
	print item
	puts "\","
	print " \"name\": \""
	print item
	puts "\","
	puts " \"data\": {"
	puts "    \"$dim\": 5.000000,"
	puts "    \"some other key\": \"some other value\""
	puts " },"
	puts " \"adjacencies\": ["
	
	# go through the mainArr[pos x] and seek each uniqArr and take equivalent[pos x] from tosArr and typesArr
		counter = 0
		foundArr = Array.new
		mainArr.each do |adja|
			if item == adja
				# store found values and pos to 2d array and later iterate that array
				foundArr.push(tosArr[counter])
			end
			counter += 1

		end
		#iterate found values and take equivalent index from tosArr
		# make unique first
                foundArr = foundArr.uniq
		last = foundArr.pop
		foundArr.each do |foundOne|
				puts " {"
				print "  \"nodeTo\": \""
				print foundOne
				print "\","
				puts "  \"data\": {"
				puts "       \"weight\": 1" 	
				puts "    }"
				puts " }, "
				
		end
		# process the last
				puts " {"
				print "  \"nodeTo\": \""
				print last
				print "\","
				puts "  \"data\": {"
				puts "       \"weight\": 1" 	
				puts "    }"
				
				puts " }]"
				puts "},"
	end
	
	# put closing JSON marking

	puts "}];"
end

getDepList(path)
