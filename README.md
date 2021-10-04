# Beer Recommender

## Getting Started

This project is created for Menú Digital Recommerder

## How to install this project

This project has git submodules, for clone the repository execute the next command:

`git clone https://github.com/ZXVentures/menudigital-landing-recommender-.git`

## How to publish changes

For save changes in the repository execute the next command in the ``main`` branch:

```
  git add .
  git commit -m"Landing Change"
  git push
```

Before change branch is recommended make a pull of this, execute the next command:

``git pull origin main``

To publish changes in the GitHub page clone the ``gh-pages`` branch, execute the next command:

``git clone -b gh-pages``

or generate a pull in this branch if have the branch in local yet:

``git pull origin gh-pages``

and excecute the next command:

```
  git checkout gh-pages
  git merge main
  git push
```

## How view the site

For view the site in production use this url:

``https://zxventures.github.io/menudigital-landing-recommender.github.io/``