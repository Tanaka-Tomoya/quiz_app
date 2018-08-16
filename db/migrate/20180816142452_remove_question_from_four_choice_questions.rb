class RemoveQuestionFromFourChoiceQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_column :four_choice_questions, :question, :string
  end
end
