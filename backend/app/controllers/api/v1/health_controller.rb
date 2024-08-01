class Api::V1::HealthController < ApplicationController
  def index
    render json: { message: "API is working!" }
  end
end