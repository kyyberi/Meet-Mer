class Meeting < ActiveRecord::Base
  def to_param
  "#{id}-#{meetingyear}-#{meetingmonth}-#{meetingdate}-#{title}".downcase.gsub(/\W+/, "-").gsub(/^[-]+|[-]$/,"").strip
  end
end
