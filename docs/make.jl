"""
    make.jl

# Description:
Creates the documentation for the `NumericalTypeAliases.jl` package.
"""

# --------------------------------------------------------------------------- #
# DEPENDENCIES
# --------------------------------------------------------------------------- #

using
    Documenter,
    Logging,
    Pkg

# --------------------------------------------------------------------------- #
# SETUP
# --------------------------------------------------------------------------- #

# Common variables of the script
PROJECT_NAME = "NumericalTypeAliases"
DOCS_NAME = "docs"

# Fix GR headless errors
ENV["GKSwstype"] = "100"

# Get the current workind directory's base name
current_dir = basename(pwd())
@info "Current directory is $(current_dir)"

# If using the CI method `julia --project=docs/ docs/make.jl`
#   or `julia --startup-file=no --project=docs/ docs/make.jl`
if occursin(PROJECT_NAME, current_dir)
    push!(LOAD_PATH, "../src/")
# Otherwise, we are already in the docs project and need to dev the above package
elseif occursin(DOCS_NAME, current_dir)
    Pkg.develop(path="..")
# Otherwise, building docs from the wrong path
else
    error("Unrecognized docs setup path")
end

# Include the package
using NumericalTypeAliases

# using JSON
if haskey(ENV, "DOCSARGS")
    for arg in split(ENV["DOCSARGS"])
        (arg in ARGS) || push!(ARGS, arg)
    end
end

# -----------------------------------------------------------------------------
# DOWNLOAD LARGE ASSETS
# -----------------------------------------------------------------------------

# Point to the raw FileStorage location on GitHub
top_url = raw"https://media.githubusercontent.com/media/AP6YC/FileStorage/main/NumericalTypeAliases/"

# List all of the files that we need to use in the docs
files = [
    "header.png",
]

# Make a destination for the files, accounting for when folder is AdaptiveResonance.jl
assets_folder = joinpath("src", "assets")
if basename(pwd()) == PROJECT_NAME || basename(pwd()) == PROJECT_NAME * ".jl"
    assets_folder = joinpath(DOCS_NAME, assets_folder)
end

download_folder = joinpath(assets_folder, "downloads")
mkpath(download_folder)
download_list = []

# Download the files one at a time
for file in files
    # Point to the correct file that we wish to download
    src_file = top_url * file * "?raw=true"
    # Point to the correct local destination file to download to
    dest_file = joinpath(download_folder, file)
    # Add the file to the list that we will append to assets
    push!(download_list, dest_file)
    # If the file isn't already here, download it
    if !isfile(dest_file)
        download(src_file, dest_file)
        @info "Downloaded $dest_file, isfile: $(isfile(dest_file))"
    else
        @info "File already exists: $dest_file"
    end
end

# Downloads debugging
detailed_logger = Logging.ConsoleLogger(stdout, Info, show_limited=false)
with_logger(detailed_logger) do
    @info "Current working directory is $(pwd())"
    @info "Assets folder is:" readdir(assets_folder, join=true)
    # full_download_folder = joinpath(pwd(), "src", "assets", "downloads")
    @info "Downloads folder exists: $(isdir(download_folder))"
    if isdir(download_folder)
        @info "Downloads folder contains:" readdir(download_folder, join=true)
    end
end

# --------------------------------------------------------------------------- #
# BUILD DOCS
# --------------------------------------------------------------------------- #

assets = [
    joinpath("assets", "favicon.ico")
]

# Make the documentation
makedocs(
    modules=[NumericalTypeAliases],
    format=Documenter.HTML(
        prettyurls = get(ENV, "CI", nothing) == "true",
        assets = assets,
    ),
    # format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "Manual" => [
            "Guide" => "man/guide.md",
            "Contributing" => "man/contributing.md",
            "Index" => "man/full-index.md"
        ]
    ],
    repo="https://github.com/AP6YC/NumericalTypeAliases.jl/blob/{commit}{path}#L{line}",
    sitename="NumericalTypeAliases.jl",
    authors="Sasha Petrenko",
)

# --------------------------------------------------------------------------- #
# DEPLOY DOCS
# --------------------------------------------------------------------------- #

# Deploy the documentation
deploydocs(
    repo="github.com/AP6YC/NumericalTypeAliases.jl.git",
    devbranch="develop",
)
