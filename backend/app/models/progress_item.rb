# app/models/progress_item.rb
class ProgressItem < ApplicationRecord
  belongs_to :user

  validates :measurement_date, presence: true
  validates :weight, presence: true
end