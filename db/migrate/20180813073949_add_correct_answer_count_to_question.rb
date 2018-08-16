class AddCorrectAnswerCountToQuestion < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :correct_answer_count, :integer, default: 0
  end
end
