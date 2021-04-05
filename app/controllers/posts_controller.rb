class PostsController < ApplicationController

  def index
    @posts = Post.order(id:"DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])　#post=を最初に追記
    #redirect_to action: :index 下記に変更
    render json: {post: post}
  end
end
