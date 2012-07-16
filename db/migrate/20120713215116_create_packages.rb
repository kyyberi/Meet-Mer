class CreatePackages < ActiveRecord::Migration
  def change
    create_table :packages do |t|
      t.string :package_name
      t.text :package_description
      t.string :package_version
      t.string :package_maintainer

      t.timestamps
    end
  end
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :startTime
      t.string :endTime
      t.text :content
      t.string :logsurl
      t.string :murl
      t.string :channel
      t.datetime :meetingdate
      t.string :meetingyear
      t.string :meetingmonth
      t.timestamps
    end
  end

end
