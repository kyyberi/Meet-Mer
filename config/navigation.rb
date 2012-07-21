# -*- coding: utf-8 -*-
# Configures your navigation
SimpleNavigation::Configuration.run do |navigation|
  # Define the primary navigation
  navigation.items do |primary|
    primary.item :meetings, 'Meetings <br /><span>takes you to<br /> meetings listing</span>', meetings_path
    primary.item :users, 'Users', users_path
    primary.item :packages, 'Packages <br /><span>takes you to<br /> Mer core <br /> package listing</span>', packages_path
    primary.item :abouts, 'About <br /><span>What is MeetMer<br />and more</span>', abouts_path
    # Add an item which has a sub navigation (same params, but with block)
    #primary.item :key_2, 'name', url, options do |sub_nav|
      # Add an item to the sub navigation (same params again)
     # sub_nav.item :key_2_1, 'name', url, options
    

    # You can also specify a condition-proc that needs to be fullfilled to display an item.
    # Conditions are part of the options. They are evaluated in the context of the views,
    # thus you can use all the methods and vars you have available in the views.
    # primary.item :users, 'Admin', users_path , :class => 'special', :if => User.create { current_user.admin? }
    #primary.item :key_4, 'Account', url, :unless => Proc.new { logged_in? }

    # you can also specify a css id or class to attach to this particular level
    # works for all levels of the menu
    # primary.dom_id = 'menu-id'
    # primary.dom_class = 'menu-class'

    # You can turn off auto highlighting for a specific level
    # primary.auto_highlight = false

  end

end
