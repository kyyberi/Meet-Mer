#!/bin/bash
RUN=true
while [ RUN ]; do 
echo `date -u`
	echo "#### Updating Tasks ###################"
	ruby tasks.rb db/meetmer_development root Zia5dekk
	echo "#### Updating Bugs ####################"
	ruby bugs.rb db/meetmer_development root Zia5dekk
	echo "#### Update Meetings ##################"
	ruby meetings.rb db/meetmer_development root Zia5dekk
sleep 600
done
