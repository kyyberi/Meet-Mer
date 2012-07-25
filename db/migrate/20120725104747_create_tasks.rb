class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :ttitle
      t.string :tlink
      t.string :tauthor
      t.string :tproduct
      t.string :tseverity
      t.string :tpriority
      t.string :tstatus

      t.timestamps
    end
  end
end
