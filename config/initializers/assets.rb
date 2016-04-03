# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( thousoondth/basicShapes.js )
Rails.application.config.assets.precompile += %w( thousoondth/thousoondth.js )
Rails.application.config.assets.precompile += %w( thousoondth/magicEdge.js )
Rails.application.config.assets.precompile += %w( thousoondth/animate.js )
Rails.application.config.assets.precompile += %w( thousoondth/execute.js )
Rails.application.config.assets.precompile += %w( dougstooth/OrbitControls.js )
Rails.application.config.assets.precompile += %w( dougstooth/OBJLoader.js )
Rails.application.config.assets.precompile += %w( dougstooth/dougstooth.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/canvas.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/keyboard.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/rotation.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/collision.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/audio.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/houndstooth.js )
Rails.application.config.assets.precompile += %w( othoundsto_song/song.js )
