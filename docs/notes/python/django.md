# Django Installation

> Django makes it easier to build better web apps more quickly and with less code.
>
> -- <cite>djangoproject.com</cite>

The official [Django] website provides great resources for beginners to get up and running. 
But the package installer and virtual environment might confuse you.

1. Install Python

    https://www.python.org/downloads/

2. Install database (PostgreSQL)

    https://www.postgresql.org/

3. Install `pip`

    `pip` is the package installer for Python. You can use `pip` to install packages from the Python Package Index (PyPI) and other indexes.

    `pip` is automatically installed with Python downloaded from [Python.org].

4. Install `venv`

    The `venv` module provides support for creating lightweight “virtual environments” with their 
    own site directories. Each virtual environment has its own Python binary and can have its own 
    independent set of installed Python packages in its site directories. Also known as `virtualenv` in Python 2.

    `venv` is automatically installed with Python downloaded from [Python.org].

5. Create virtual environment

    The following command will create a new virtual environment in the current directory.
    This virtual environment and all its related files and data will be stored in the `.venv` folder.
    You can create and name the `venv` whatever you like but `.venv` is fairly standard.
    ```console linenums="0"
    python -m venv .venv
    ```

    !!! question "What is the difference between venv, pyvenv, pyenv, virtualenv, virtualenvwrapper, pipenv, etc?"

        There are many different packages and virtual environment managers available. Each created to solve a unique issue or to solve it
        better/faster/more efficient than the other. For now you can safely ignore all of them and just use the standard shipped `pip` and `venv`.

    !!! tip 

        Use a separate virtual environment for each project.

6. Activate virtual environment

    To start using your newly created virtual environment you just have to run `activate`.
    ```console linenums="0"
    .venv\Scripts\activate
    ```

    If you have multiple environments you can run a specific environment by navigating to its `activate` file.
    ```console linenums="0"
    C:\dev\python\fungame\.venv\Scripts\activate
    ```

    Once activate, your command shell will be updated and include the name of your `venv` in parentheses.
    ```console linenums="0" hl_lines="2"
    C:\dev\python\fungame> .venv\Scripts\Activate
    (.venv) PS C:\dev\python\fungame>
    ```

7. Install Django

    Once your virtual environment is activated, you can use the command shell like you usually would.
    In this case we will install Django.

    ```console linenums="0"
    python -m pip install Django
    ```

8. Git clone repository

    At this point it is recommended to initiate and create your first `git commit`. This way you have a nice clean
    starting point in case anything goes wrong. For more info about `git` see the [git notes].

9. Install requirements

    ```console linenums="0"
    python -m pip install -r requirements.txt
    ```

10. Deactivate virtual environment when done

    ```console linenums="0"
    deactivate
    ```

    
## Links

- Official [Django] website
- [venv offical docs]
- [pypi.org] Package Index
- [Python.org]

[git notes]: ../../git
[Django]: https://www.djangoproject.com/
[venv offical docs]: https://docs.python.org/library/venv.html
[pypi.org]: https://pypi.org/project/pip/
[Python.org]: https://www.python.org/