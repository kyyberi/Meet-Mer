class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.string :stype
      t.string :sproduct
      t.string :sseverity
      t.integer :scount
      t.string :spriority
      t.integer :syear
      t.integer :smonth
      t.integer :sday

      t.timestamps
    end
  end
end
