var documenterSearchIndex = {"docs":
[{"location":"man/contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"This page serves as the contribution guide for the OptimalEstimation.jl package. From top to bottom, the ways of contributing are:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"GitHub Issues: how to raise an issue with the project.\nJulia Development: how to download and interact with the package.\nGitFlow: how to directly contribute code to the package in an organized way on GitHub.\nDevelopment Details: how the internals of the package are currently setup if you would like to directly contribute code.","category":"page"},{"location":"man/contributing/#Issues","page":"Contributing","title":"Issues","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"The main point of contact is the GitHub issues page for the project. This is the easiest way to contribute to the project, as any issue you find or request you have will be addressed there by the authors of the package. Depending on the issue, the authors will collaborate with you, and after making changes they will link a pull request which addresses your concern or implements your proposed changes.","category":"page"},{"location":"man/contributing/#Julia-Development","page":"Contributing","title":"Julia Development","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"As a Julia package, development follows the usual procedure:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"Clone the project from GitHub\nSwitch to or create the branch that you wish work on (see GitFlow).\nStart Julia at your development folder.\nInstantiate the package (i.e., download and install the package dependencies).","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"For example, you can get the package and startup Julia with","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"git clone git@github.com:AP6YC/OptimalEstimation.jl.git\njulia --project=.","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"note: Note\nIn Julia, you must activate your project in the current REPL to point to the location/scope of installed packages. The above immediately activates the project when starting up Julia, but you may also separately startup the julia and activate the package with the interactive package manager via the ] syntax:julia\njulia> ]\n(@v1.6) pkg> activate .\n(OptimalEstimation) pkg>","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"You may run the package's unit tests after the above setup in Julia with","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"julia> using Pkg\njulia> Pkg.instantiate()\njulia> Pkg.test()","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"or interactively though the Julia package manager with","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"julia> ]\n(OptimalEstimation) pkg> instantiate\n(OptimalEstimation) pkg> test","category":"page"},{"location":"man/contributing/#GitFlow","page":"Contributing","title":"GitFlow","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"The OptimalEstimation.jl package follows the GitFlow git working model. The original post by Vincent Driessen outlines this methodology quite well, while Atlassian has a good tutorial as well. In summary:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"Create a feature branch off of the develop branch with the name feature/<my-feature-name>.\nCommit your changes and push to this feature branch.\nWhen you are satisfied with your changes, initiate a GitHub pull request (PR) to merge the feature branch with develop.\nIf the unit tests pass, the feature branch will first be merged with develop and then be deleted.\nReleases will be periodically initiated from the develop branch and versioned onto the master branch.\nImmediate bug fixes circumvent this process through a hotfix branch off of master.","category":"page"},{"location":"man/contributing/#Development-Details","page":"Contributing","title":"Development Details","text":"","category":"section"},{"location":"man/contributing/#Documentation","page":"Contributing","title":"Documentation","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"These docs are currently hosted as a static site on the GitHub pages platform. They are setup to be built and served in a separate branch gh-pages from the master/development branch of the project.","category":"page"},{"location":"man/contributing/#Package-Structure","page":"Contributing","title":"Package Structure","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"The OptimalEstimation.jl package has the following file structure:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"OptimalEstimation\n├── .github/workflows       // GitHub: workflows for testing and documentation.\n├── docs                    // Docs: documentation for the module.\n│   └───src                 //      Documentation source files.\n├── examples                // Source: example usage scripts.\n├── src                     // Source: majority of source code.\n├── test                    // Test: Unit, integration, and environment tests.\n├── .gitignore              // Git: .gitignore for the whole project.\n├── LICENSE                 // Doc: the license to the project.\n├── Project.toml            // Julia: the Pkg.jl dependencies of the project.\n└── README.md               // Doc: this document.","category":"page"},{"location":"man/contributing/#Optimal-Estimation-Module-Workflow","page":"Contributing","title":"Optimal Estimation Module Workflow","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"TODO","category":"page"},{"location":"man/contributing/#DataConfig","page":"Contributing","title":"DataConfig","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"TODO","category":"page"},{"location":"man/contributing/#Type-Aliases","page":"Contributing","title":"Type Aliases","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"In the pursuit of an architecture-agnostic implementation (i.e., support for both 32- and 64-bit systems), type aliases and other special Julia types are used in this project.","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"This module borrows a convention from the StatsBase.jl package by defining a variety of aliases for numerical types used throughout the package to standardize usage. This has the benefits of readability and speed by explicitly These are defined in src/common.jl and are currently as follows:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"# Real-numbered aliases\nconst RealArray{T<:Real, N} = AbstractArray{T, N}\nconst RealVector{T<:Real} = AbstractArray{T, 1}\nconst RealMatrix{T<:Real} = AbstractArray{T, 2}\n\n# Integered aliases\nconst IntegerArray{T<:Integer, N} = AbstractArray{T, N}\nconst IntegerVector{T<:Integer} = AbstractArray{T, 1}\nconst IntegerMatrix{T<:Integer} = AbstractArray{T, 2}\n\n# Specifically floating-point aliases\nconst RealFP = Union{Float32, Float64}","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"In this package, data samples are always Real-valued while class labels are integered. Furthermore, independent class labels are always Int because of the Julia native support for a given system's signed native integer type.","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"This project does not yet test for the support of arbitrary precision arithmetic.","category":"page"},{"location":"man/contributing/#Authors","page":"Contributing","title":"Authors","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"If you simply have suggestions for improvement, Sasha Petrenko (<sap625@mst.edu>) is the current developer and maintainer of the OptimalEstimation.jl package, so please feel free to reach out with thoughts and questions.","category":"page"},{"location":"man/full-index/#main-index","page":"Index","title":"Index","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"This page lists the core methods and types of the NumericalTypeAliases.jl package. The Types section contains all type aliases, abstract and concrete. The Constants section also has some constant utility variables associated with the package. Each of these entries link to the docstrings in the Docs section.","category":"page"},{"location":"man/full-index/#index-types","page":"Index","title":"Types","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Modules = [NumericalTypeAliases]\nOrder = [:type]\nPublic = true","category":"page"},{"location":"man/full-index/#index-constants","page":"Index","title":"Constants","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Modules = [NumericalTypeAliases]\nOrder = [:constant]\nPublic = true","category":"page"},{"location":"man/full-index/#index-docs","page":"Index","title":"Docs","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"NumericalTypeAliases\nRealArray\nRealVector\nRealMatrix\nIntegerArray\nIntegerVector\nIntegerMatrix\nRealFP\nFloat\nNTA_VERSION","category":"page"},{"location":"man/full-index/#NumericalTypeAliases","page":"Index","title":"NumericalTypeAliases","text":"Main module for NumericalTypeAliases.jl, a Julia package of numerical array type aliases.\n\nThis module exports all of the type aliases and utilities used by the NumericalTypeAliases.jl package.\n\nExports\n\nFloat\nIntegerArray\nIntegerMatrix\nIntegerVector\nNTA_ABSTRACT_TYPES\nNTA_CONCRETE_TYPES\nNTA_VERSION\nRealArray\nRealFP\nRealMatrix\nRealVector\n\n\n\n\n\n","category":"module"},{"location":"man/full-index/#NumericalTypeAliases.RealArray","page":"Index","title":"NumericalTypeAliases.RealArray","text":"RealArray{T<:Real, N} = AbstractArray{T, N}\n\nAbstract type for N-dimensional array of real, non-integered values.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.RealVector","page":"Index","title":"NumericalTypeAliases.RealVector","text":"RealVector{T<:Real} = AbstractArray{T, 1}\n\nAbstract type for 1-D vector of real, non-integered values.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.RealMatrix","page":"Index","title":"NumericalTypeAliases.RealMatrix","text":"RealMatrix{T<:Real} = AbstractArray{T, 2}\n\nAbstract type for 2-D matrix of real, non-integered values.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.IntegerArray","page":"Index","title":"NumericalTypeAliases.IntegerArray","text":"IntegerArray{T<:Integer, N} = AbstractArray{T, N}\n\nAbstract type for N-dimensional array of whole-numbered integers.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.IntegerVector","page":"Index","title":"NumericalTypeAliases.IntegerVector","text":"IntegerVector{T<:Integer} = AbstractArray{T, 1}\n\nAbstract type for 1-D vector of whole-numbered integers.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.IntegerMatrix","page":"Index","title":"NumericalTypeAliases.IntegerMatrix","text":"IntegerMatrix{T<:Integer} = AbstractArray{T, 2}\n\nAbstract type for 2-D matrix of whole-numbered integers.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.RealFP","page":"Index","title":"NumericalTypeAliases.RealFP","text":"RealFP = AbstractFloat\n\nAbstract type for a real floating-point number. This definition is provided for naming consistency in the package despite being equivalent to an AbstractFloat.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.Float","page":"Index","title":"NumericalTypeAliases.Float","text":"Float\n\nConcrete type for the default available floating point value. This is likely Float64 on most systems.\n\nBecause a Float64 in Julia is the equivalent of a double in other languages (while Float32 is a float), this has the possibility to be confusing depending on the context. Use carefully.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#NumericalTypeAliases.NTA_VERSION","page":"Index","title":"NumericalTypeAliases.NTA_VERSION","text":"NTA_VERSION\n\nA constant that contains the version of the installed NumericalTypeAliases.jl package.\n\n\n\n\n\n","category":"constant"},{"location":"man/guide/#Package-Guide","page":"Guide","title":"Package Guide","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The use the NumericalTypeAliases.jl package, you should know:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"How to install the package\nUsage basics","category":"page"},{"location":"man/guide/#installation","page":"Guide","title":"Installation","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The NumericalTypeAliases package can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"pkg> add NumericalTypeAliases","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Alternatively, it can be added to your environment in a script with","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"using Pkg\nPkg.add(\"NumericalTypeAliases\")","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"If you wish to have the latest changes between releases, you can directly add the GitHub repo as a dependency with","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"pkg> add https://github.com/AP6YC/NumericalTypeAliases.jl","category":"page"},{"location":"man/guide/#usage","page":"Guide","title":"Usage Basics","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"After installation, load the module with","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"using NumericalTypeAliases","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Then, you can define your functions with these type aliases. For example, say that you have a function that accepts only real-valued vectors because integer don't make sense in your specific situation:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"function my_real_func(input::RealVector)\n    # Do some math on a 1D vector with floats.\nend","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Or say that you know that you need a function to operate on an array with a list of indices. You know that floats don't make sense for indexing, so you would write with IntegerVector:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"function my_indexer(data::RealMatrix, indices::IntegerVector)\n    for ix in eachindex(indices)\n        println(data[ix, :])\n    end\nend","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Furthermore, if you know that you need a real-valued number but want your package to still support 32-bit systems, you wouldn't hardcode Float64 everywhere like usual. Instead, you could write with the abstract type RealFP (which is just an alias for AbstractFloat):","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"function my_float_func(datum::RealFP)\n    # Do math with a real-valued floating point variable\nend","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"As a bonus, say that you want to specify a hardcoded type within a struct as a float, but you don't want to write Float64 or Float32. In the same way that the Julia Base defines an Int as the largest integer on your system, you can define a variable to be of the larget native floating point variable on your system depending on the system word size with Float:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"# Make a struct that will compile with the largest available float size\nstruct MyStruct\n    cool_variable::Float\nend\n\n# Make a cool struct\nMyStruct(3.14)","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"NOTE RealFP is the abstract type, and Float is the concrete type. This is just like in base Julia where Integer is the abstract type, and Int is the concrete type.","category":"page"},{"location":"man/guide/#Aliases","page":"Guide","title":"Aliases","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The aliases exported in this package are:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"RealArray\nRealVector\nRealMatrix\nIntegerArray\nIntegerVector\nIntegerMatrix\nRealFP\nFloat\nNTA_VERSION","category":"page"},{"location":"#NumericalTypeAliases.jl","page":"Home","title":"NumericalTypeAliases.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"These pages serve as the official documentation for the NumericalTypeAliases.jl Julia package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The purpose of this package is to provide a home for the development and use of optimal estimation algorithms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the Index for the complete list of documented functions and types.","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This documentation is split into the following sections:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"man/guide.md\",\n    \"man/contributing.md\",\n    \"man/full-index.md\",\n]\nDepth = 1","category":"page"},{"location":"","page":"Home","title":"Home","text":"The Package Guide provides a tutorial to the full usage of the package. Instructions on how to contribute to the package are found in Contributing, and docstrings for every element of the package is listed in the Index.","category":"page"}]
}
