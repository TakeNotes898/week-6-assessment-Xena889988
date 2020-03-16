# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) this is creating a main controller
class BlogPostsController < ApplicationController
  def index
    # 2) this is for posting all the methods to work with
    @posts = BlogPost.all
  end

  def show
    # 3) this is to post each index page (:id gets a random number)
    @post = BlogPost.find(params[:id])
  end

  # 4) 
  def new
  end

  def create
    # 5) for creating a new method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) this is for letting the page redirect when the page is deleted
      redirect_to blog_post_path(@post)
    end
  end

  # 7) private is for not been seen on for the user
  private
  def blog_post_params
    # 8) 
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)
class BlogPost < ApplicationRecord
  # 10) foreing key that the method has many ...
  has_many :comments
end
