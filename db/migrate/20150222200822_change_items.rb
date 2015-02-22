class ChangeItems < ActiveRecord::Migration
  def change
    remove_column :items, :url, :string
    remove_column :items, :description, :text
  end
end
