class CreateFourChoiceQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :four_choice_questions do |t|
      t.text :title, default: 'test'
      t.string :a, default: 'test'
      t.string :b, default: 'test'
      t.string :c, default: 'test'
      t.string :d, default: 'test'
      t.string :answer, default: 'test'

      t.timestamps
    end
  end
end
