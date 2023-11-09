
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMultipleSelectProSpec.h"

@interface MultipleSelectPro : NSObject <NativeMultipleSelectProSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MultipleSelectPro : NSObject <RCTBridgeModule>
#endif

@end
