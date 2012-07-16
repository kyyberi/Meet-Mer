class CreateMeetings < ActiveRecord::Migration
drop_table "meetings"
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :startTime
      t.string :endTime
      t.text :content
      t.string :logsurl
      t.string :url
      t.string :channel
      t.datetime :meetingdate
      t.string :meetingyear
      t.string :meetingmonth
      t.timestamps
    end
  end
end
