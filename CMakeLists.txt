cmake_minimum_required(VERSION 2.8)

add_definitions(-DNAPI_EXPERIMENTAL)
add_definitions(-DNAPI_VERSION=3)

set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/lib)

set(CMAKE_POSITION_INDEPENDENT_CODE true)

project (node-sha3-shake256 CXX)

add_subdirectory(${CMAKE_SOURCE_DIR}/deps)

add_subdirectory(${CMAKE_SOURCE_DIR}/src)

add_library(${PROJECT_NAME} SHARED $<TARGET_OBJECTS:sha3-shake256-addon> $<TARGET_OBJECTS:fips202>)

set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 11)

target_link_libraries(${PROJECT_NAME}  ${CMAKE_JS_LIB})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")


