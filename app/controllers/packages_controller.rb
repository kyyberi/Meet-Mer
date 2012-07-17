class PackagesController < ApplicationController
  # GET /packages
  # GET /packages.json
  def index
    @packages = Package.all

    @meetings = Meeting.find(:all, :order => 'meetingdate DESC', :limit => 10)
    @meetingsall = Meeting.find(:all, :order => 'meetingdate DESC')
    @meetingstotal = Meeting.find(:all)

    @meetings1 = Meeting.find(:all, :conditions => {:meetingmonth => "1", :meetingyear => Time.now.year})
    @meetings2 = Meeting.find(:all, :conditions => {:meetingmonth => "2", :meetingyear => Time.now.year})
    @meetings3 = Meeting.find(:all, :conditions => {:meetingmonth => "3", :meetingyear => Time.now.year})
    @meetings4 = Meeting.find(:all, :conditions => {:meetingmonth => "4", :meetingyear => Time.now.year})
    @meetings5 = Meeting.find(:all, :conditions => {:meetingmonth => "5", :meetingyear => Time.now.year})
    @meetings6 = Meeting.find(:all, :conditions => {:meetingmonth => "6", :meetingyear => Time.now.year})
    @meetings7 = Meeting.find(:all, :conditions => {:meetingmonth => "7", :meetingyear => Time.now.year})
    @meetings8 = Meeting.find(:all, :conditions => {:meetingmonth => "8", :meetingyear => Time.now.year})
    @meetings9 = Meeting.find(:all, :conditions => {:meetingmonth => "9", :meetingyear => Time.now.year})
    @meetings10 = Meeting.find(:all, :conditions => {:meetingmonth => "10", :meetingyear => Time.now.year})
    @meetings11 = Meeting.find(:all, :conditions => {:meetingmonth => "11", :meetingyear => Time.now.year})
    @meetings12 = Meeting.find(:all, :conditions => {:meetingmonth => "12", :meetingyear => Time.now.year})

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @packages }
    end
  end

  # GET /packages/1
  # GET /packages/1.json
  def show
    @package = Package.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @package }
    end
  end

  # GET /packages/new
  # GET /packages/new.json
  def new
    @package = Package.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @package }
    end
  end

  # GET /packages/1/edit
  def edit
    @package = Package.find(params[:id])
  end

  # POST /packages
  # POST /packages.json
  def create
    @package = Package.new(params[:package])

    respond_to do |format|
      if @package.save
        format.html { redirect_to @package, notice: 'Package was successfully created.' }
        format.json { render json: @package, status: :created, location: @package }
      else
        format.html { render action: "new" }
        format.json { render json: @package.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /packages/1
  # PUT /packages/1.json
  def update
    @package = Package.find(params[:id])

    respond_to do |format|
      if @package.update_attributes(params[:package])
        format.html { redirect_to @package, notice: 'Package was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @package.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /packages/1
  # DELETE /packages/1.json
  def destroy
    @package = Package.find(params[:id])
    @package.destroy

    respond_to do |format|
      format.html { redirect_to packages_url }
      format.json { head :no_content }
    end
  end
end
