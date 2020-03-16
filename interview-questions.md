# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
    FOREIGN KEY
      Sightings belongs_to Animal
      Animal has_many sightings
  FOREIGN KEYS will be a part of the Animal and the Sightings
  
  
  Researched answer:



2. Which routes must always be passed params and why?

  Your answer:
    params must be passed to every class where changes must be made
      -create, destroy, update, show


  Researched answer:



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

<!--rails route-->
<!--main.controller-->
<!--game page-->
<!--params guess-->

  class GameController < MainController
      def index   
          @games = Game.all
          render json: @games
      end
     
      def show
          @game = Game.find([params[:id]])
          render json: @game
      end

      def create
          @game = Game.create(guess_params)
              if @game.valid?
                  render json: @game
              else 
                  render json: @game.errors
              end
      end   

4. Name three rails generator commands. What is created by each?

  Your answer:

  MODEL - database tools
  VIEW - makes a model
  CONTROLLER - pulls from model and view

  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

  /users        method="GET"   index -- display a list of methods

  /users/1      method="GET"   

  /users/new    method="GET"   show -- return an html form from creating a new method

  /users/       method="POST"  create -- create a new method

  /users/1      method="PUT"    update -- update a method

  /users/1      method="DELETE" delete -- delete a method