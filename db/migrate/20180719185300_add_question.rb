class AddQuestion < ActiveRecord::Migration[5.1]
  def change
    add_column :four_choice_questions, :question, :text, default: 'test'
  end
end
