```@meta
DocTestSetup = quote
    using NumericalTypeAliases, Dates
end
```

![header](assets/downloads/header.png)

---

# NumericalTypeAliases.jl

These pages serve as the official documentation for the NumericalTypeAliases.jl Julia package.
The purpose of this package is to provide a set of common numerical type aliases for the development of other Julia packages.

See the [Package Guide](@ref) for full usage of the package.

## Documentation Outline

This documentation is split into the following sections:

```@contents
Pages = [
    "man/guide.md",
    "man/contributing.md",
    "man/full-index.md",
]
Depth = 1
```

The [Package Guide](@ref) provides a tutorial to the full usage of the package.
Instructions on how to contribute to the package are found in [Contributing](@ref).
See the [Index](@ref main-index) for the complete list of documented functions and types.

## Documentation Build

This documentation was built using [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl) with the following version and OS:

```@example
using NumericalTypeAliases, Dates # hide
println("NumericalTypeAliases v$(NTA_VERSION) docs built $(Dates.now()) with Julia $(VERSION) on $(Sys.KERNEL)") # hide
```

## Citation

If you make use of this project, please generate your citation with the [CITATION.cff](../../CITATION.cff) file of the repository.
Alternatively, you may use the following BibTeX entry for the JOSS paper associated with the repository:

```bibtex
@misc{NumericalTypeAliases,
  doi = {10.5281/zenodo.7183296},
  url = {https://doi.org/10.5281/zenodo.7183296},
  author = {Sasha Petrenko},
  title = {NumericalTypeAliases.jl: A Julia Package for Function Dispatch on Numerical Types},
}
```
