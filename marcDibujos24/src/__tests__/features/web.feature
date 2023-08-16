Feature: Web

  Background:
    Given the user opens the app

  Scenario: Check web - Loads components
    Then the title should show: Marc dibujos

  Scenario: Check web - Loads the categories of the images
    Then should show all the categories

  Scenario Outline: Change image category - Change the category
    When the user presses the '<categoryButton>' button
    Then should show the category: '<category>'

    Examples:
      |     categoryButton |   category |
      |        categoryAbc |        abc |
      |      categoryAnime |      anime |
      |         categoryBn |         bn |
      | categoryDragonBall | dragonBall |
      |     categoryFondos |     fondos |
      |   categoryFusiones |   fusiones |
      |       categoryGods |       gods |
      |    categoryInazuma |    inazuma |
      |        categoryNft |        nft |
      |         categoryOc |         oc |

  Scenario: Show all images in home
    When the user presses the 'home' button
    Then should show all the categories
  
  Scenario Outline: Change image category - Change the category and go to home
    When the user presses the '<categoryButton>' button
    When the user presses the 'home' button
    Then should show all the categories

    Examples:
      |     categoryButton |
      |        categoryAbc |
      |      categoryAnime |
      |         categoryBn |
      | categoryDragonBall |
      |     categoryFondos |
      |   categoryFusiones |
      |       categoryGods |
      |    categoryInazuma |
      |        categoryNft |
      |         categoryOc |

  Scenario: Open searcher
    When the user presses the 'search' button
    Then should show the search settings

  Scenario: Close searcher - Clicking the search button
    When the user presses the 'search' button
    When the user presses the 'search' button
    Then should not show the search settings

  Scenario: Close searcher - Clicking the stop search button
    When the user presses the 'search' button
    When the user presses the 'stopSearch' button
    Then should not show the search settings

  Scenario: Close searcher - Clicking the start search button
    When the user presses the 'search' button
    When the user presses the 'startSearch' button
    Then should not show the search settings

  Scenario: Search -  Change search modal
    When the user presses the 'search' button
    When the user changes the search modal
    Then the input 'aselectTitle' input should show

  Scenario Outline: Search - Search one category
    When the user presses the 'search' button
    When the user changes to category '<categoryButton>'
    When the user presses the 'startSearch' button
    Then should show the category: '<category>'

  Examples:
    |     categoryButton |   category |
    |        categoryAbc |        abc |
    |      categoryAnime |      anime |
    |         categoryBn |         bn |
    | categoryDragonBall | dragonBall |
    |     categoryFondos |     fondos |
    |   categoryFusiones |   fusiones |
    |       categoryGods |       gods |
    |    categoryInazuma |    inazuma |
    |        categoryNft |        nft |
    |         categoryOc |         oc |

  Scenario Outline: Search - Search by title
    When the user presses the 'search' button
    When the user changes the search modal
    When the user writes the word '<word>'
    Then should show images that contains the word '<word>'

  Examples:
    |    word |
    |       a |
    | portada |
    |   image |

  Scenario: Search - Activate double search
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    Then the 'aselectCategory' or 'aselectTitle' inputs should show
    Then the 'bselectCategory' or 'bselectTitle' inputs should show

  Scenario: Search - Deactivate double search
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    When the user presses the 'doubleSearchButton' button
    Then the 'aselectCategory' or 'aselectTitle' inputs should show
    Then the 'bselectCategory' or 'bselectTitle' inputs should not show

  Scenario Outline: Search - Search by two categories
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    When the user selects the '<firstCategory>' for the first input
    When the user selects the '<secondCategory>' for the second input
    Then should show images in the '<firstCategory>' category and in the '<secondCategory>' category

  Examples:
    |      firstCategory |     secondCategory |
    |        categoryAbc | categoryDragonBall |
    |      categoryAnime |     categoryFondos |
    |         categoryBn |    categoryInazuma |
    |         categoryBn |         categoryOc |
    | categoryDragonBall |     categoryFondos |
    |     categoryFondos |    categoryInazuma |
    |     categoryFondos |         categoryOc |

  Scenario Outline: Search - Search by a title and one category
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    When the user changes the first modal
    When the user writes '<word>' in the 'aselectTitle' input
    When the user selects the '<category>' for the second input
    Then should show the category '<category>' with images with '<word>'

  Examples:
    |  word |    category |
    | image |  categoryOc |
    |     k | categoryAbc |
  
  Scenario Outline: Search - Search by one category and a title
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    When the user changes the second modal
    When the user selects the '<category>' for the first input
    When the user writes '<word>' in the 'bselectTitle' input
    Then should show the category '<category>' with images with '<word>'

  Examples:
    |    category |  word |
    |  categoryOc | image |
    | categoryAbc |     k |

  Scenario Outline: Search - Search by two titles
    When the user presses the 'search' button
    When the user presses the 'doubleSearchButton' button
    When the user changes the first modal
    When the user changes the second modal
    When the user writes '<firstWord>' in the 'aselectTitle' input
    When the user writes '<secondWord>' in the 'bselectTitle' input

  Examples:
    | firstWord | secondWord |
    |     image |         zo |
    |    animal |         co |

MANUAL TESTS:
  Scenario: Check web - Loads the correct path for the images
    Then all images should show with their titles

  Scenario: Close searcher - Do not search

  Scenario: Hover initial image
    When the user hovers the initial image
    Then the container should show all the image

  Scenario: Go to the top of the page
    When the user scrols down
    When the user persses the logo
    Then should go to the top of the page