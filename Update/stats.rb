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


require 'mysql'

def usage()
        puts "################# USAGE ############"
        puts "to run script, use (localhost only):"
        puts " 'ruby stats.rb [database name] [database username] [database passwd]' "
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



begin
    
    con = Mysql.new 'localhost', username, passwd, database    
    rs = con.query "SELECT * FROM bugs"
    puts "We have #{rs.num_rows} row(s)"
    
    rs.each_hash do |row|
	bid = row['id'] 
	bproduct = row['bproduct']
        bseverity = row['bseverity']
        bpriority = row['bpriority']	
	sdate = row['updated_at'].split
	dateitems = String(sdate[0]).split('-')
       
	myear = dateitems[0]
      	mmonth = dateitems[1]
	mday = dateitems[2]
	mclock = sdate[1]
	
	insert = "INSERT INTO stats (stype, sproduct, sseverity, spriority, syear, smonth, sday, updated_at, created_at) VALUES ("	
	insert += "'bug',"
	insert += "'" + con.escape_string(bproduct) +"',"
	insert += "'" + con.escape_string(bseverity) +"',"
	insert += "'" + con.escape_string(bpriority) +"',"
	insert += "'" + con.escape_string(myear) +"',"
	insert += "'" + con.escape_string(mmonth) +"',"
	insert += "'" + con.escape_string(mday) +"',"
	insert += "NOW(),"
	insert += "NOW()"
        insert += ")"
	#puts insert

	
#		rs3 = con.query(insert)


    end      
    
rescue Mysql::Error => e
    puts e    
ensure
    con.close if con
end
