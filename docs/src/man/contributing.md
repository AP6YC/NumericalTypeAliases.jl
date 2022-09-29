# Contributing

This page serves as the contribution guide for the `OptimalEstimation.jl` package.
From top to bottom, the ways of contributing are:

- [GitHub Issues:](@ref Issues) how to raise an issue with the project.
- [Julia Development:](@ref Julia-Development) how to download and interact with the package.
- [GitFlow:](@ref GitFlow) how to directly contribute code to the package in an organized way on GitHub.
- [Development Details:](@ref Development-Details) how the internals of the package are currently setup if you would like to directly contribute code.

## Issues

The main point of contact is the [GitHub issues](https://github.com/AP6YC/OptimalEstimation.jl/issues) page for the project.
This is the easiest way to contribute to the project, as any issue you find or request you have will be addressed there by the authors of the package.
Depending on the issue, the authors will collaborate with you, and after making changes they will link a [pull request](@ref GitFlow) which addresses your concern or implements your proposed changes.

## Julia Development

As a Julia package, development follows the usual procedure:

1. Clone the project from GitHub
2. Switch to or create the branch that you wish work on (see [GitFlow](@ref)).
3. Start Julia at your development folder.
4. Instantiate the package (i.e., download and install the package dependencies).

For example, you can get the package and startup Julia with

```sh
git clone git@github.com:AP6YC/OptimalEstimation.jl.git
julia --project=.
```

!!! note "Note"
    In Julia, you must activate your project in the current REPL to point to the location/scope of installed packages.
    The above immediately activates the project when starting up Julia, but you may also separately startup the julia and activate the package with the interactive
    package manager via the `]` syntax:

    ```julia
    julia
    julia> ]
    (@v1.6) pkg> activate .
    (OptimalEstimation) pkg>
    ```

You may run the package's unit tests after the above setup in Julia with

```julia
julia> using Pkg
julia> Pkg.instantiate()
julia> Pkg.test()
```

or interactively though the Julia package manager with

```julia
julia> ]
(OptimalEstimation) pkg> instantiate
(OptimalEstimation) pkg> test
```

## GitFlow

The `OptimalEstimation.jl` package follows the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) git working model.
The [original post](https://nvie.com/posts/a-successful-git-branching-model/) by Vincent Driessen outlines this methodology quite well, while [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) has a good tutorial as well.
In summary:

1. Create a feature branch off of the `develop` branch with the name `feature/<my-feature-name>`.
2. Commit your changes and push to this feature branch.
3. When you are satisfied with your changes, initiate a [GitHub pull request](https://github.com/AP6YC/OptimalEstimation.jl/pulls) (PR) to merge the feature branch with `develop`.
4. If the unit tests pass, the feature branch will first be merged with develop and then be deleted.
5. Releases will be periodically initiated from the `develop` branch and versioned onto the `master` branch.
6. Immediate bug fixes circumvent this process through a `hotfix` branch off of `master`.

## Development Details

### Documentation

These docs are currently hosted as a static site on the GitHub pages platform.
They are setup to be built and served in a separate branch `gh-pages` from the master/development branch of the project.

### Package Structure

The `OptimalEstimation.jl` package has the following file structure:

```console
OptimalEstimation
├── .github/workflows       // GitHub: workflows for testing and documentation.
├── docs                    // Docs: documentation for the module.
│   └───src                 //      Documentation source files.
├── examples                // Source: example usage scripts.
├── src                     // Source: majority of source code.
├── test                    // Test: Unit, integration, and environment tests.
├── .gitignore              // Git: .gitignore for the whole project.
├── LICENSE                 // Doc: the license to the project.
├── Project.toml            // Julia: the Pkg.jl dependencies of the project.
└── README.md               // Doc: this document.
```

### Optimal Estimation Module Workflow

TODO

#### DataConfig

TODO

#### Type Aliases

In the pursuit of an architecture-agnostic implementation (i.e., support for both 32- and 64-bit systems), type aliases and other special Julia types are used in this project.

This module borrows a convention from the `StatsBase.jl` package by defining a variety of aliases for numerical types used throughout the package to standardize usage.
This has the benefits of readability and speed by explicitly
These are defined in `src/common.jl` and are currently as follows:

```julia
# Real-numbered aliases
const RealArray{T<:Real, N} = AbstractArray{T, N}
const RealVector{T<:Real} = AbstractArray{T, 1}
const RealMatrix{T<:Real} = AbstractArray{T, 2}

# Integered aliases
const IntegerArray{T<:Integer, N} = AbstractArray{T, N}
const IntegerVector{T<:Integer} = AbstractArray{T, 1}
const IntegerMatrix{T<:Integer} = AbstractArray{T, 2}

# Specifically floating-point aliases
const RealFP = Union{Float32, Float64}
```

In this package, data samples are always `Real`-valued while class labels are integered.
Furthermore, independent class labels are always `Int` because of the [Julia native support](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#Integers) for a given system's signed native integer type.

This project does not yet test for the support of [arbitrary precision arithmetic](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#Arbitrary-Precision-Arithmetic).

## Authors

If you simply have suggestions for improvement, Sasha Petrenko (<sap625@mst.edu>) is the current developer and maintainer of the OptimalEstimation.jl package, so please feel free to reach out with thoughts and questions.
