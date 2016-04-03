class CreateWebforms < ActiveRecord::Migration
  def change
    create_table :webforms do |t|
      t.string :visitor
      t.string :subject
      t.text :message

      t.timestamps null: false
    end
  end
end
