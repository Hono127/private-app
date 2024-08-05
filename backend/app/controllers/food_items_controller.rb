class FoodItemsController < ApplicationController
  # CSRFトークンの検証を無効にする
  skip_before_action :verify_authenticity_token

  before_action :set_food_item, only: [:show, :update, :destroy]

  # GET /food_items
  def index
    @food_items = FoodItem.all
    render json: @food_items
  end

  # GET /food_items/:id
  def show
    render json: @food_item
  end

  # POST /food_items
  def create
    @food_item = FoodItem.new(food_item_params)
    if @food_item.save
      render json: @food_item, status: :created
    else
      Rails.logger.debug @food_item.errors.full_messages # エラーメッセージをログに出力
      render json: @food_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_items/:id
  def update
    if @food_item.update(food_item_params)
      render json: @food_item
    else
      Rails.logger.debug @food_item.errors.full_messages # エラーメッセージをログに出力
      render json: @food_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /food_items/:id
  def destroy
    @food_item.destroy
  end

  private

  def set_food_item
    @food_item = FoodItem.find(params[:id])
  end

  def food_item_params
    params.require(:food_item).permit(:name, :calories, :protein, :fat, :carbohydrates)
  end
end