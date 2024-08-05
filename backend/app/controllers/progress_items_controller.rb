class ProgressItemsController < ApplicationController
  # CSRFトークンの検証を無効にする
  skip_before_action :verify_authenticity_token
  
  before_action :set_progress_item, only: [:show, :update, :destroy]

  # GET /progress_items
  def index
    @progress_items = ProgressItem.all
    render json: @progress_items
  end

  # GET /progress_items/:id
  def show
    render json: @progress_item
  end

  # POST /progress_items
  def create
    @progress_item = ProgressItem.new(progress_item_params)
    if @progress_item.save
      render json: @progress_item, status: :created
    else
      render json: @progress_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /progress_items/:id
  def update
    if @progress_item.update(progress_item_params)
      render json: @progress_item
    else
      render json: @progress_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /progress_items/:id
  def destroy
    @progress_item.destroy
  end

  private

  def set_progress_item
    @progress_item = ProgressItem.find(params[:id])
  end

  def progress_item_params
    params.require(:progress_item).permit(:user_id, :measurement_date, :weight, :body_fat_percentage, :comments)
  end
end