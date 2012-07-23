class CreateBugs < ActiveRecord::Migration

  def change
    create_table :bugs do |t|
      t.string :btitle
      t.string :blink
      t.string :bauthor
      t.string :bstatus
      t.timestamps
    end
  end
end
