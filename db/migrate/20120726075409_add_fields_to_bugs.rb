class AddFieldsToBugs < ActiveRecord::Migration
  def change
	add_column :bugs, :bproduct, :string
  end
end
