class BugsController < ApplicationController
  # GET /bugs
  # GET /bugs.json
  def index
    @bugs = Bug.find(:all, :order => 'updated_at DESC')
    @bugsbydate = Bug.find(:all, :order => 'bpriority ASC, bseverity')
    @bugsQA = Bug.find(:all, :conditions => {:bproduct => "Mer QA"})
    @bugsVendorInterface = Bug.find(:all, :conditions => {:bproduct => "Mer Vendor Interface"})
    @bugsPolicies = Bug.find(:all, :conditions => {:bproduct => "Mer Policies and Processes"})
    @bugsMINT = Bug.find(:all, :conditions => {:bproduct => "Mer Integration Tools  MINT"})
    @bugsCore = Bug.find(:all, :conditions => {:bproduct => "Mer Core"})
    @bugsCrosshelpers = Bug.find(:all, :conditions => {:bproduct => "Mer Crosshelpers"})
    @bugstypes = Bug.select(:bproduct).uniq
    # not implemented at database level. Community has planned some kind of keyword to identify
    # low hanging fruits.[25.7.2012] 
    @bugsBananas = Bug.find(:all, :conditions => {:bproduct => "Easy"})
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @bugs }
    end
  end

  # GET /bugs/1
  # GET /bugs/1.json
  def show
    @bug = Bug.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @bug }
    end
  end

  # GET /bugs/new
  # GET /bugs/new.json
  def new
    @bug = Bug.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @bug }
    end
  end

  # GET /bugs/1/edit
  def edit
    @bug = Bug.find(params[:id])
  end

  # POST /bugs
  # POST /bugs.json
  def create
    @bug = Bug.new(params[:bug])

    respond_to do |format|
      if @bug.save
        format.html { redirect_to @bug, notice: 'Bug was successfully created.' }
        format.json { render json: @bug, status: :created, location: @bug }
      else
        format.html { render action: "new" }
        format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /bugs/1
  # PUT /bugs/1.json
  def update
    @bug = Bug.find(params[:id])

    respond_to do |format|
      if @bug.update_attributes(params[:bug])
        format.html { redirect_to @bug, notice: 'Bug was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bugs/1
  # DELETE /bugs/1.json
  def destroy
    @bug = Bug.find(params[:id])
    @bug.destroy

    respond_to do |format|
      format.html { redirect_to bugs_url }
      format.json { head :no_content }
    end
  end
end
