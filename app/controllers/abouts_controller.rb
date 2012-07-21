class AboutsController < ApplicationController
  # GET /abouts
  # GET /abouts.json
  def index
    @abouts = About.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @abouts }
    end
  end

  # GET /abouts/1
  # GET /abouts/1.json
  def show
    @about = About.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @about }
    end
  end

  # GET /abouts/new
  # GET /abouts/new.json
  def new
    @about = About.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @about }
    end
  end

  # GET /abouts/1/edit
  def edit
    @about = About.find(params[:id])
  end

  # POST /abouts
  # POST /abouts.json
  def create
    @about = About.new(params[:about])

    respond_to do |format|
      if @about.save
        format.html { redirect_to @about, notice: 'About was successfully created.' }
        format.json { render json: @about, status: :created, location: @about }
      else
        format.html { render action: "new" }
        format.json { render json: @about.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /abouts/1
  # PUT /abouts/1.json
  def update
    @about = About.find(params[:id])

    respond_to do |format|
      if @about.update_attributes(params[:about])
        format.html { redirect_to @about, notice: 'About was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @about.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /abouts/1
  # DELETE /abouts/1.json
  def destroy
    @about = About.find(params[:id])
    @about.destroy

    respond_to do |format|
      format.html { redirect_to abouts_url }
      format.json { head :no_content }
    end
  end
end
