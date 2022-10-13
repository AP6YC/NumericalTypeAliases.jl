# Package Guide

The use the `NumericalTypeAliases.jl` package, you should know:

- [How to install the package](@ref installation)
- [Usage basics](@ref usage)
- [Types and constants](@ref types-constants)

## [Installation](@id installation)

The NumericalTypeAliases package can be installed using the Julia package manager.
From the Julia REPL, type `]` to enter the Pkg REPL mode and run

```julia
pkg> add NumericalTypeAliases
```

Alternatively, it can be added to your environment in a script with

```julia
using Pkg
Pkg.add("NumericalTypeAliases")
```

If you wish to have the latest changes between releases, you can directly add the GitHub repo as a dependency with

```julia
pkg> add https://github.com/AP6YC/NumericalTypeAliases.jl
```

## [Usage Basics](@id usage)

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
This `Float` type is provided for semantic convenience, though beware that it has been the [subject of great debate](https://discourse.julialang.org/t/float-type-like-int-type/1164).

## [Types and Constants](@id types-constants)

The aliases exported in this package are:

```@meta
CurrentModule=NumericalTypeAliases
```

- Real-valued arrays:
  - [`RealArray`](@ref): an arbitrary size array of floats.
  - [`RealVector`](@ref): a 1-D vector of floats.
  - [`RealMatrix`](@ref): a 2-D matrix of floats.
- Integer-valued arrays:
  - [`IntegerArray`](@ref): an arbitrary size array of integers.
  - [`IntegerVector`](@ref): a 1-D vector of integers.
  - [`IntegerMatrix`](@ref): a 2-D matrix of integers.
- Single values:
  - [`RealFP`](@ref): an abstract floating point type, same as AbstractFloat.
  - [`Float`](@ref): a concrete floating point type, likely Float64 depending on the system.

Furthermore, the package exports some convenience variables:

- [`NTA_VERSION`](@ref): the version of `NumericalTypeAliases.jl` that is installed on the system.
- [`NTA_ABSTRACT_TYPES`](@ref): a list of the abstract types in the package.
- [`NTA_CONCRETE_TYPES`](@ref): a list of the concrete types in the package.
- [`NTA_TYPES`](@ref): a combined list of all of the types in the package.
