class AddColumnsToBugs < ActiveRecord::Migration
  def change
    add_column :bugs, :bseverity, :string

    add_column :bugs, :bpriority, :string

  end
end
