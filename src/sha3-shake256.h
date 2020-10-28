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

Napi::Value adsorb(const Napi::CallbackInfo& info);

Napi::Value finalize(const Napi::CallbackInfo& info);

Napi::Value squeeze(const Napi::CallbackInfo& info);

Napi::Value release(const Napi::CallbackInfo& info);

Napi::Value syncShake256(const Napi::CallbackInfo& info);

Napi::Object Init(Napi::Env env, Napi::Object exports);

#endif