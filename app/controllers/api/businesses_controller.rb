module Api
  class BusinessesController < ApplicationController
    wrap_parameters :business, include: [
      :name, 
      :location, 
      :num_stars, 
      :price_range, 
      :description, 
      :category,
      :avatar
    ]
    
    def create
      @business = Business.new(business_params)
      if @business.save
        render json: @business, methods: :avatar_url
      else
        render json: @business.errors.full_messages, 
                     status: :unprocessable_entity
      end
    end
    
    def update
      @business = Business.find(params[:id])
      if @business.update_attributes(business_params)
        render json: @business
      else
        render json: @business.errors.full_messages, 
                     status: :unprocessable_entity
      end
    end
    
    def destroy
      @business = Business.find(params[:id])
      @business.try(:destroy)
      render json: {}
    end
    
    def index
      @businesses = Business.all
      render json: @businesses, methods: :avatar_url
    end
    
    def show
      @business = Business.includes(:reviews).find(params[:id])
      render json: @business, include: :reviews
      
    end
    
    private
    def business_params
      params.require(
        :business
      ).permit(
        :name, 
        :location, 
        :num_stars, 
        :price_range, 
        :description, 
        :category,
        :avatar
      )
    end
  end
end