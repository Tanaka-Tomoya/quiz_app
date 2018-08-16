class AddQuestion < ActiveRecord::Migration[5.1]
  def change
    add_column :four_choice_questions, :question, :string, default: 'test'
  end
end
