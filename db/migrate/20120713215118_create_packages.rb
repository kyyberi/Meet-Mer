class CreatePackages < ActiveRecord::Migration
  def change
    create_table :packages do |t|
      t.string :package_name
      t.string :package_git
      t.string :package_version
      t.string :package_commit
      t.timestamps
    end
  end

end
