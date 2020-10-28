#ifndef H_SHA3_SHAKE256
#define H_SHA3_SHAKE256

#ifdef __cplusplus
extern "C" {
#endif

#include "fips202.h"

#ifdef __cplusplus
}
#endif

#include <napi.h>

Napi::Value init(const Napi::CallbackInfo& info);

#endif