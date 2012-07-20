### Creates seed for Mer core package listing ###
#require 'nokogiri'
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
	
	#group = "libqtsql4 xorg-x11 zypper"
	group = "communications"

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
			temppos = sfrom.index('/')
			tempstr = sfrom[0, temppos]
			# puts tempstr
			if group.downcase.include? tempstr.downcase
			# strip / - take last string after '/'
			substring = "/"
			sfrom.include? substring
				start_ss = sfrom.rindex(substring) 
				sfrom = sfrom[start_ss+1, sfrom.length]
			
			#if item is in wanted?
			

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
			end
			arrUnique = arrFroms.uniq
			
	end
	createGroups(arrUnique, arrFroms, arrTos, arrDtypes)
end

def printStart(item)

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
	# print the first part for each 
	printStart(item)
	
	# go through the mainArr[pos x] and seek each uniqArr and take equivalent[pos x] from tosArr and typesArr
		counter = 0
		foundArr = Array.new
		depArr = Array.new
		mainArr.each do |adja|
			if item == adja
				# store found values and pos to 2d array and later iterate that array
				foundArr.push(tosArr[counter])
				depArr.push(typesArr[counter])
			end
			counter += 1

		end
		#iterate found values and take equivalent index from tosArr
		# make unique first
 		itemcount = 0
                foundArr = foundArr.uniq
		last = foundArr.pop
		foundArr.each do |foundOne|

				puts " {"
				print "  \"nodeTo\": \""
				print foundOne
				print "\","
				puts "  \"data\": {"
				puts "       \"weight\": 1," 	
				printLink(depArr[itemcount])
				puts "    }"
				puts " }, "
				itemcount += 1
		end
		# process the last
				puts " {"
				print "  \"nodeTo\": \""
				print last
				print "\","
				puts "  \"data\": {"
				printLink(depArr[itemcount])
#                               puts "       \"relation\": \""
#                               print depArr[itemcount] 	
#				print "\""
				puts "    }"
				puts " }]"
				# test if not last in uniqArr, if not add "}," else "}"
				if count != uniqArr.length
				puts "},"
				end
	end
	

	# put closing JSON marking
	
	puts "}];"
	
end

def printLink(type)
	
	if type.include? 'file'
                                puts "       \"$type\":\"arrow\","
                                puts "       \"$color\":\"#ec1111\","
                                puts "       \"$dim\":20"
	elsif type.include? 'feature'
                                puts "       \"$type\":\"arrow\","
                                puts "       \"$color\":\"#0a74ac\","
                                puts "       \"$dim\":20"

	elsif type.include? 'package'
                                puts "       \"$type\":\"arrow\","
                                puts "       \"$color\":\"#f111ff\","
                                puts "       \"$dim\":20"

	else
                                puts "       \"$type\":\"arrow\","
                                puts "       \"$color\":\"green\","
                                puts "       \"$dim\":20"

	end	



end

getDepList(path)
