class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :name, index: true, unique: true

      t.timestamps
    end
  end
end
