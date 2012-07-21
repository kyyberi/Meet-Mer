class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end
  helper_method :meetings_by_months

  def meetings_by_months
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
  end



end

