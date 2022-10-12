[![numericaltypes-header](docs/src/assets/header.png)][docs-dev-url]

A collection of type aliases restricting to numerical for multiple dispatch.

Please read the [documentation][docs-dev-url] for detailed usage and tutorials.

| **Stable Docs**  | **Dev Docs** | **Testing Status** | **Coverage** |
|:----------------:|:------------:|:----------------:|:------------:|
| [![Stable][docs-stable-img]][docs-stable-url] | [![Dev][docs-dev-img]][docs-dev-url]| [![Build Status][ci-img]][ci-url] | [![Codecov][codecov-img]][codecov-url] |
| **Release** | **JuliaHub Status** | **Dependents** | **Zenodo DOI** |
| [![version][version-img]][version-url] | [![pkgeval][pkgeval-img]][pkgeval-url] | [![deps][deps-img]][deps-url] | [![DOI][zenodo-img]][zenodo-url] |

[zenodo-img]: https://zenodo.org/badge/543317478.svg
[zenodo-url]: https://zenodo.org/badge/latestdoi/543317478

[deps-img]: https://juliahub.com/docs/NumericalTypeAliases/deps.svg
[deps-url]: https://juliahub.com/ui/Packages/NumericalTypeAliases/Repio?t=2

[version-img]: https://juliahub.com/docs/NumericalTypeAliases/version.svg
[version-url]: https://juliahub.com/ui/Packages/NumericalTypeAliases/Repio

[pkgeval-img]: https://juliahub.com/docs/NumericalTypeAliases/pkgeval.svg
[pkgeval-url]: https://juliahub.com/ui/Packages/NumericalTypeAliases/Repio

[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg
[docs-stable-url]: https://AP6YC.github.io/NumericalTypeAliases.jl/stable

[docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg
[docs-dev-url]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev

[ci-img]: https://github.com/AP6YC/NumericalTypeAliases.jl/workflows/CI/badge.svg
[ci-url]: https://github.com/AP6YC/NumericalTypeAliases.jl/actions?query=workflow%3ACI

[codecov-img]: https://codecov.io/gh/AP6YC/NumericalTypeAliases.jl/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/AP6YC/NumericalTypeAliases.jl

[issues-url]: https://github.com/AP6YC/NumericalTypeAliases.jl/issues
[contrib-url]: https://ap6yc.github.io/NumericalTypeAliases.jl/dev/man/contributing/

- [Overview](#overview)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Aliases](#aliases)
- [Structure](#structure)
- [Contributing](#contributing)
- [History](#history)
- [Acknowledgements](#acknowledgements)
  - [Authors](#authors)
- [License](#license)

## Overview

The purpose of this package is to define a set of commonly used aliases in numerical algorithms when it is known that an input vector or matrix should have an element type of floating-point or integer.

This package was inspired by the blurb in `StatsBase.jl` that defined a set of type aliases to serve this very purpose.

## Installation

This project is distributed as a Julia package, available on [JuliaHub](https://juliahub.com/).
Its usage follows the usual Julia package installation procedure, interactively:

```julia
] add NumericalTypeAliases
```

or programmatically:

```julia
using Pkg
Pkg.add("NumericalTypeAliases")
```

You may also add the package directly from GitHub to get the latest changes between releases:

```julia
] add https://github.com/AP6YC/NumericalTypeAliases.jl
```

## Quickstart

After installation, load the module with

```julia
using NumericalTypeAliases
```

Then, you can define your functions with these type aliases.
For example, say that you have a function that accepts only real-valued vectors because integer don't make sense in your specific situation:

```julia
function my_real_func(input::RealVector)
    # Do some math on a 1D vector with floats.
end
```

Or say that you know that you need a function to operate on an array with a list of indices.
You know that floats don't make sense for indexing, so you would write with `IntegerVector`:

```julia
function my_indexer(data::RealMatrix, indices::IntegerVector)
    for ix in eachindex(indices)
        println(data[ix, :])
    end
end
```

Furthermore, if you know that you need a real-valued number but want your package to still support 32-bit systems, you wouldn't hardcode `Float64` everywhere like usual.
Instead, you could write with the abstract type `RealFP` (which is just an alias for `AbstractFloat`):

```julia
function my_float_func(datum::RealFP)
    # Do math with a real-valued floating point variable
end
```

As a bonus, say that you want to specify a hardcoded type within a struct as a float, but you don't want to write Float64 or Float32.
In the same way that the Julia Base defines an `Int` as the largest integer on your system, you can define a variable to be of the larget native floating point variable on your system depending on the system word size with `Float`:

```julia
# Make a struct that will compile with the largest available float size
struct MyStruct
    cool_variable::Float
end

# Make a cool struct
MyStruct(3.14)
```

**NOTE** `RealFP` is the abstract type, and `Float` is the concrete type.
This is just like in base Julia where `Integer` is the abstract type, and `Int` is the concrete type.

## Aliases

The aliases exported in this package are:

- Real-valued arrays:
  - [`RealArray`][1]: an arbitrary size array of floats.
  - [`RealVector`][2]: a 1-D vector of floats.
  - [`RealMatrix`][3]: a 2-D matrix of floats.
- Integer-valued arrays:
  - [`IntegerArray`][4]: an arbitrary size array of integers.
  - [`IntegerVector`][5]: a 1-D vector of integers.
  - [`IntegerMatrix`][6]: a 2-D matrix of integers.
- Single values:
  - [`RealFP`][7]: an abstract floating point type, same as AbstractFloat.
  - [`Float`][8]: a concrete floating point type, likely Float64 depending on the system.

Furthermore, the package exports some convenience variables:

- [`NTA_VERSION`][9]: the version of `NumericalTypeAliases.jl` that is installed on the system.
- [`NTA_ABSTRACT_TYPES`][10]: a list of the abstract types in the package.
- [`NTA_CONCRETE_TYPES`][11]: a list of the concrete types in the package.
- ['NTA_TYPES`][12]: a combined list of all abstract and concrete types in the package.

[1]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.RealArray
[2]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.RealVector
[3]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.RealMatrix
[4]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.IntegerArray
[5]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.IntegerVector
[6]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.IntegerMatrix
[7]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.RealFP
[8]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.Float
[9]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.NTA_VERSION
[10]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.NTA_ABSTRACT_TYPES
[11]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.NTA_CONCRETE_TYPES
[12]: https://AP6YC.github.io/NumericalTypeAliases.jl/dev/man/full-index/#NumericalTypeAliases.NTA_TYPES

## Structure

The following file tree summarizes the project structure:

```console
NumericalTypeAliases
├── .github/workflows       // GitHub: workflows for testing and documentation.
├── docs                    // Docs: documentation for the module.
│   └─── src                //      Documentation source files.
├── src                     // Source: majority of source code.
├── test                    // Test: Unit, integration, and environment tests.
├── .gitattributes          // Git: LFS settings, languages, etc.
├── .gitignore              // Git: .gitignore for the whole project.
├── CODE_OF_CONDUCT.md      // Doc: the code of conduct for contributors.
├── CONTRIBUTING.md         // Doc: contributing guide (points to this page).
├── LICENSE                 // Doc: the license to the project.
├── Project.toml            // Julia: the Pkg.jl dependencies of the project.
└── README.md               // Doc: this document.
```

## Contributing

If you have a question or concern, please raise an [issue][issues-url].
For more details on how to work with the project, propose changes, or even contribute code, please see the [Developer Notes][contrib-url] in the project's documentation.

In summary:

1. Questions and requested changes should all be made in the [issues][issues-url] page.
These are preferred because they are publicly viewable and could assist or educate others with similar issues or questions.
2. For changes, this project accepts pull requests (PRs) from `feature/<my-feature>` branches onto the `develop` branch using the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) methodology.
If unit tests pass and the changes are beneficial, these PRs are merged into `develop` and eventually folded into versioned releases.
3. The project follows the [Semantic Versioning](https://semver.org/) convention of `major.minor.patch` incremental versioning numbers.
Patch versions are for bug fixes, minor versions are for backward-compatible changes, and major versions are for new and incompatible usage changes.

## History

- 9/29/2022 - Begin project.
- 9/30/2022 - Submit v0.1.0 to JuliaHub.
- 10/10/2022 - v0.2.0 release.

## Acknowledgements

### Authors

This package is developed and maintained by [Sasha Petrenko](https://github.com/AP6YC) with sponsorship by the [Applied Computational Intelligence Laboratory (ACIL)](https://acil.mst.edu/). This project is supported by grants from the [Night Vision Electronic Sensors Directorate](https://c5isr.ccdc.army.mil/inside_c5isr_center/nvesd/), the [DARPA Lifelong Learning Machines (L2M) program](https://www.darpa.mil/program/lifelong-learning-machines), [Teledyne Technologies](http://www.teledyne.com/), and the [National Science Foundation](https://www.nsf.gov/).
The material, findings, and conclusions here do not necessarily reflect the views of these entities.

## License

This software is openly maintained by the ACIL of the Missouri University of Science and Technology under the [MIT License](LICENSE).
